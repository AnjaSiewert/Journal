import Button from "../Button/Button";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";

export default function EntryForm() {
  return (
    <>
      <Input text="Motto" />
      <Textarea text="Notes" />
      <Button />
    </>
  );
}
