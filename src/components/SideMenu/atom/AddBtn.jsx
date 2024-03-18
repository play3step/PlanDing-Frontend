const AddBtn = ({ addList }) => {
  return (
    <button
      onClick={addList}
      style={{
        width: '13.645833333333332vw',
        height: '3.888888888888889vh',
        marginBottom: '0.7vw',
        borderRadius: '8px',
        border: 'none',
        boxShadow:
          '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)'
      }}>
      <img
        src="./icon/plus.png"
        style={{
          width: '1.3020833333333335vw',
          height: '2.4074074074074074vh',
          verticalAlign: 'middle',
          marginRight: '0.5vw'
        }}
      />
      Add Task
    </button>
  )
}
export default AddBtn
