import "./Textarea.css";

export default function Textarea({ text }) {
  return (
    <>
      <label className="label_notes" htmlFor={text}>
        {text}
      </label>
      <textarea className="input_notes" rows={5} id={text} name={text}>
        {" "}
      </textarea>
    </>
  );
}
