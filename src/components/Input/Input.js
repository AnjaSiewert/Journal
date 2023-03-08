export default function Input({ text }) {
  return (
    <>
      <label htmlFor={text}>Motto</label>
      <input id={text} type="text" name={text}></input>
    </>
  );
}
