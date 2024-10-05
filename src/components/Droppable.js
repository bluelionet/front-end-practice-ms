import classNames from 'classnames';

export default function Droppable({ active, addWidget }) {
  function handleDrop(e) {
    e.preventDefault();
    const type = e.dataTransfer.getData('text/plain');
    addWidget(type);
  }

  return (
    <div
      className={classNames('droppable', { active })}
      onDragOver={e => e.preventDefault()}
      onDrop={handleDrop}
    >
    </div>
  );
}
