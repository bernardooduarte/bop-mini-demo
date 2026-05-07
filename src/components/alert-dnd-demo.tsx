'use client';

import { useMemo, useState } from 'react';
import { DragDropProvider, DragOverlay } from '@dnd-kit/react';
import { useSortable, isSortable } from '@dnd-kit/react/sortable';
import { useDroppable } from '@dnd-kit/react';
import { PointerSensor, PointerActivationConstraints } from '@dnd-kit/dom';

export type AlertItem = {
  id: string;
  label: string;
  variant: 'alta-temperatura' | 'falha-do-sensor' | 'pressao-critica' | 'baixa-pressao';
};

const defaultAlertItems: AlertItem[] = [
  { id: 'alta-temperatura', label: 'Alta Temperatura', variant: 'alta-temperatura' },
  { id: 'falha-do-sensor', label: 'Falha do Sensor', variant: 'falha-do-sensor' },
  { id: 'pressao-critica', label: 'Pressao Critica', variant: 'pressao-critica' },
  { id: 'baixa-pressao', label: 'Baixa Pressao', variant: 'baixa-pressao' },
];

type SortableAlertRowProps = {
  item: AlertItem;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
  draggingEnabled: boolean;
};

function SortableAlertRow({ item, index, isSelected, onSelect, draggingEnabled }: SortableAlertRowProps) {
  const { ref, handleRef, isDragSource, isDropTarget } = useSortable({
    id: item.id,
    index,
    group: 'alerts',
    type: 'alert',
    accept: 'alert',
    disabled: !draggingEnabled,
  });

  return (
    <div
      ref={ref}
      className={`flex items-center gap-2 rounded-md border px-3 py-2 bg-white ${
        isSelected ? 'border-sky-500 bg-sky-50' : 'border-slate-200'
      } ${isDropTarget ? 'ring-2 ring-sky-300' : ''} ${isDragSource ? 'opacity-70' : ''}`}
      data-testid={`dnd-item-${item.id}`}
    >
      <button
        onClick={onSelect}
        className="flex-1 text-left"
        type="button"
        data-testid={`dnd-item-select-${item.id}`}
      >
        {item.label}
      </button>
      <span
        ref={handleRef}
        role="button"
        tabIndex={0}
        className="cursor-grab select-none rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600"
        aria-label="Arrastar"
        data-testid={`dnd-item-handle-${item.id}`}
      >
        ::
      </span>
    </div>
  );
}

function TrashDropzone({ disabled }: { disabled: boolean }) {
  const { ref, isDropTarget } = useDroppable({
    id: 'trash',
    accept: 'alert',
    disabled,
  });

  return (
    <div
      ref={ref}
      className={`mt-3 rounded-md border border-dashed px-3 py-4 text-center text-xs font-semibold ${
        isDropTarget ? 'border-red-500 bg-red-50 text-red-700' : 'border-slate-300 text-slate-500'
      }`}
      data-testid="trash-dropzone"
    >
      Arraste aqui para remover
    </div>
  );
}

export function AlertDnDDemo({ initialItems = defaultAlertItems }: { initialItems?: AlertItem[] }) {
  const initial = useMemo(
    () => (Array.isArray(initialItems) ? initialItems : defaultAlertItems),
    [initialItems]
  );
  const [selectedAlert, setSelectedAlert] = useState(initial[0]?.id ?? '');
  const [dndAlerts, setDndAlerts] = useState(initial);
  const [draggingEnabled, setDraggingEnabled] = useState(true);
  const [activeDragId, setActiveDragId] = useState<string | null>(null);

  const addAlert = () => {
    const id = `alert-${Date.now()}`;
    const newAlert: AlertItem = {
      id,
      label: `Novo Alerta ${dndAlerts.length + 1}`,
      variant: 'alta-temperatura',
    };

    setDndAlerts((current) => [...current, newAlert]);
    setSelectedAlert(id);
  };

  const removeSelectedAlert = () => {
    setDndAlerts((current) => {
      const filtered = current.filter((a) => a.id !== selectedAlert);
      if (filtered.length > 0) {
        setSelectedAlert(filtered[0].id);
      } else {
        setSelectedAlert('');
      }
      return filtered;
    });
  };

  const moveSelectedUp = () => {
    setDndAlerts((current) => {
      const index = current.findIndex((i) => i.id === selectedAlert);
      if (index <= 0) return current;
      const copy = [...current];
      const [item] = copy.splice(index, 1);
      copy.splice(index - 1, 0, item);
      return copy;
    });
  };

  const moveSelectedDown = () => {
    setDndAlerts((current) => {
      const index = current.findIndex((i) => i.id === selectedAlert);
      if (index < 0 || index >= current.length - 1) return current;
      const copy = [...current];
      const [item] = copy.splice(index, 1);
      copy.splice(index + 1, 0, item);
      return copy;
    });
  };

  const resetAlertsOrder = () => {
    setDndAlerts(initial);
    setSelectedAlert(initial[0]?.id ?? '');
  };

  const toggleDragging = () => setDraggingEnabled((s) => !s);

  const activeItem = activeDragId
    ? dndAlerts.find((item) => item.id === activeDragId)
    : null;

  return (
    <div className="mb-4">
      <h3 className="mb-3 text-sm font-medium text-slate-700">DND Kit Demo</h3>

      <div className="mb-3 flex flex-wrap gap-2">
        <button
          onClick={addAlert}
          className="rounded-md bg-slate-900 px-3 py-1 text-sm font-semibold text-white"
          data-testid="add-alert-button"
        >
          Adicionar Alerta
        </button>

        <button
          onClick={removeSelectedAlert}
          className="rounded-md bg-red-600 px-3 py-1 text-sm font-semibold text-white"
          data-testid="remove-alert-button"
          disabled={!selectedAlert}
        >
          Remover Selecionado
        </button>

        <button
          onClick={moveSelectedUp}
          className="rounded-md bg-slate-700 px-3 py-1 text-sm font-semibold text-white"
          data-testid="move-up-button"
          disabled={!selectedAlert}
        >
          Mover ↑
        </button>

        <button
          onClick={moveSelectedDown}
          className="rounded-md bg-slate-700 px-3 py-1 text-sm font-semibold text-white"
          data-testid="move-down-button"
          disabled={!selectedAlert}
        >
          Mover ↓
        </button>

        <button
          onClick={resetAlertsOrder}
          className="rounded-md bg-slate-500 px-3 py-1 text-sm font-semibold text-white"
          data-testid="reset-order-button"
        >
          Resetar Ordem
        </button>

        <button
          onClick={toggleDragging}
          className="rounded-md bg-amber-600 px-3 py-1 text-sm font-semibold text-white"
          data-testid="toggle-drag-button"
        >
          {draggingEnabled ? 'Desabilitar Arrastar' : 'Habilitar Arrastar'}
        </button>
      </div>

      <DragDropProvider
        sensors={(defaults) => [
          ...defaults.filter((sensor) => sensor !== PointerSensor),
          PointerSensor.configure({
            activationConstraints: [
              new PointerActivationConstraints.Distance({ value: 6 }),
            ],
          }),
        ]}
        onDragStart={(event) => {
          const sourceId = String(event.operation.source?.id ?? '');
          setActiveDragId(sourceId || null);
        }}
        onDragEnd={(event) => {
          setActiveDragId(null);

          if (event.canceled) {
            return;
          }

          const { source, target } = event.operation;
          const targetId = String(target?.id ?? '');

          if (targetId === 'trash') {
            const sourceId = String(source?.id ?? '');
            setDndAlerts((current) => {
              const filtered = current.filter((item) => item.id !== sourceId);
              if (filtered.length > 0) {
                setSelectedAlert((currentSelected) =>
                  currentSelected === sourceId ? filtered[0].id : currentSelected
                );
              } else {
                setSelectedAlert('');
              }
              return filtered;
            });
            return;
          }

          if (isSortable(source)) {
            const { initialIndex, index } = source;

            if (initialIndex !== index) {
              setDndAlerts((current) => {
                const reordered = [...current];
                const [movedItem] = reordered.splice(initialIndex, 1);
                reordered.splice(index, 0, movedItem);
                return reordered;
              });
            }
          }
        }}
      >
        <div className="rounded-md border border-slate-200 p-3 bg-slate-50">
          <p className="text-xs text-slate-500 mb-2">Arraste pelo handle :: ou use os botões para manipular a lista.</p>
          <div className="grid gap-2" data-testid="dnd-list">
            {dndAlerts.map((item, index) => (
              <SortableAlertRow
                key={item.id}
                item={item}
                index={index}
                isSelected={selectedAlert === item.id}
                onSelect={() => setSelectedAlert(item.id)}
                draggingEnabled={draggingEnabled}
              />
            ))}
          </div>
          <TrashDropzone disabled={!draggingEnabled} />
        </div>

        <DragOverlay>
          {(source) => {
            const item = source?.id
              ? dndAlerts.find((alert) => alert.id === String(source.id))
              : activeItem;

            if (!item) return null;

            return (
              <div className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-md">
                {item.label}
              </div>
            );
          }}
        </DragOverlay>
      </DragDropProvider>
    </div>
  );
}
