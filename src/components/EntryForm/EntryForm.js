import Button from "../Button/Button";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import "./EntryForm.css";

export default function EntryForm() {
  return (
    <>
      <form className="EntryForm">
        <fieldset className="EntryForm__fieldset">
          <h2 className="EntryForm__header">New Entry</h2>
          <Input text="Motto" />
          <Textarea text="Notes" />
        </fieldset>
        <Button />
      </form>
    </>
  );
}
