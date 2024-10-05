export default function WidgetEditor({ widget, onUpdate }) {
  const { type, width, height, url, text } = widget;

  return (
    <div>
      {type === 'image' && (
        <>
          <input
            type="text"
            value={width}
            onChange={e => onUpdate({ width: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={height}
            onChange={e => onUpdate({ height: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={url}
            onChange={e => onUpdate({ url: e.target.value })}
          />
        </>
      )}
      {type === 'text' && (
        <input
          type="text"
          value={text}
          onChange={e => onUpdate({ text: e.target.value })}
        />
      )}
    </div>
  );
}
