export default function Widget({ widget, onEdit }) {
  const { type, width, height, url, text } = widget;
  const typeName = {
    image: '圖片元件',
    text: '文字元件',
  }[type] ?? type;

  return (
    <div
      className="widget"
      data-widget-type-name={typeName}
      onClick={() => onEdit()}
    >
      {type === 'image' && (
        <img src={url} alt="" style={{ width, height }} />
      )}
      {type === 'text' && (
        <span>{text}</span>
      )}
    </div>
  );
}
