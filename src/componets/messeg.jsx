const tus = ' человек тусанёт с тобой сегодня'
const tuss = ' человека тусанут с тобой сегодня'

const FormatMassege = (count) => {
  console.log(count)
  return count > 1 && count <= 4 ? (
    <span>
      {count}
      {tuss}
    </span>
  ) : (
    <span>
      {count}
      {tus}
    </span>
  )
}
export default FormatMassege
