export default function Draggable({ type, setIsDragging }) {
  const typeName = {
    image: '圖片元件',
    text: '文字元件',
  }[type] ?? type;

  function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', type);
    setIsDragging(true);
  }

  function handleDragEnd() {
    setIsDragging(false);
  }

  return (
    <div
      className="draggable"
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {typeName}
    </div>
  );
}
