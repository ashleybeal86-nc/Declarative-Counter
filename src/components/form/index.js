export default function Form() {
  function handleFormSubmit() {}

  function handleInputChange(event) {
    console.log(event.target.value);
  }

  return (
    <form submit={handleFormSubmit}>
      <input onChange={handleInputChange} type="text" />
      <input defaultValue="submit" type="button" />
    </form>
  );
}
