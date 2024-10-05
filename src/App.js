import React, { useState } from 'react';
import './App.css';
import Widget from './components/Widget.js';
import WidgetEditor from './components/WidgetEditor.js';
import Draggable from './components/Draggable.js';
import Droppable from './components/Droppable.js';

function App() {
  const [widgets, setWidgets] = useState([]);
  const [editingWidgetId, setEditingWidgetId] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  function addWidget(type) {
    const commonValues = {
      id: Date.now(),
      type,
    };
    const newWidget = {
      image: {
        ...commonValues,
        width: '300px',
        height: '300px',
        url: 'https://fakeimg.pl/300x300/?text=image',
      },
      text: {
        ...commonValues,
        text: 'text',
      },
    }[type];

    if (newWidget) {
      setWidgets([
        ...widgets,
        newWidget,
      ]);
    }
  }

  function updateEditingWidget(newValues) {
    const newWidgets = widgets.map(widget => {
      if (widget.id === editingWidgetId) {
        return {
          ...widget,
          ...newValues,
        };
      }
      return widget;
    });

    setWidgets(newWidgets);
  }

  const widgetComponents = widgets.map(widget => (
    <Widget
      key={widget.id}
      widget={widget}
      onEdit={() => setEditingWidgetId(widget.id)}
    />
  ));

  return (
    <div>
      <div className="side">
        {editingWidgetId === null ? (
          <>
            <Draggable type="image" setIsDragging={setIsDragging} />
            <Draggable type="text" setIsDragging={setIsDragging} />
          </>
        ) : (
          <WidgetEditor
            widget={widgets.find(({ id }) => id === editingWidgetId)}
            onUpdate={newValues => updateEditingWidget(newValues)}
          />
        )}
      </div>
      <div className="main">
        <div style={{ border: '1px solid #000' }}>
          This is a fixed header, no need to modify.
        </div>
        {widgets.length === 0 ? (
          <div className="widgets-placeholder">
            Empty
          </div>
        ) : widgetComponents}
      </div>
      <Droppable active={isDragging} addWidget={addWidget} />
    </div>
  );
}

export default App;
