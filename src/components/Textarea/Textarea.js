export default function Textarea({ text }) {
  return (
    <>
      <label htmlFor={text}>{text}</label>
      <textarea rows={5} id={text} name={text}>
        {" "}
      </textarea>
    </>
  );
}
