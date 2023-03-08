export default function Input({ text }) {
  return (
    <>
      <label htmlFor={text}>{text}</label>
      <input id={text} type="text" name={text}></input>
    </>
  );
}
