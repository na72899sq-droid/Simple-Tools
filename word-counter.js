// Word & Character Counter
document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("textInput");
  const wordCount = document.getElementById("wordCount");
  const charCount = document.getElementById("charCount");

  if (!textInput) return;

  textInput.addEventListener("input", () => {
    const text = textInput.value;

    // Characters count
    charCount.textContent = text.length;

    // Words count (accurate)
    const trimmedText = text.trim();
    const words = trimmedText === "" ? 0 : trimmedText.split(/\s+/).length;
    wordCount.textContent = words;
  });
});
