const AddList = ({ time }) => {
  return (
    <button
      style={{
        width: '6.458333333333334vw',
        height: '3.3333333333333335vh',
        borderRadius: '8px',
        border: 'none',
        boxShadow:
          '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)'
      }}>
      {time}
    </button>
  )
}
export default AddList
