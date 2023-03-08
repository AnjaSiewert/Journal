import Icon from "../Icon/Icon";

export default function Entry({ title, text, date }) {
  return (
    <>
      <strong>{date}</strong>
      <h2>{title}</h2>
      <Icon />
      <p>{text}</p>
    </>
  );
}
