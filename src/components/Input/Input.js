import "./Input.css";

export default function Input({ text }) {
  return (
    <>
      <label className="label_motto" htmlFor={text}>
        {text}
      </label>
      <input className="input_motto" id={text} type="text" name={text}></input>
    </>
  );
}
