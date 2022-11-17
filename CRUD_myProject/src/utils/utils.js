export default function formatdBirthday(birthday) {
  let FormatedBirthday = birthday.split("T");
  return FormatedBirthday[0];
}
