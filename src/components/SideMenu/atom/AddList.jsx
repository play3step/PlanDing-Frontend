import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function SelectVariants({ scheduleData, onChang }) {
  const createTimeOptions = (start, end, exclude) => {
    const options = []
    for (let i = start; i <= end; i++) {
      if (i !== exclude) {
        options.push(
          <MenuItem
            value={i}
            key={i}>
            {`${i}:00`}
          </MenuItem>
        )
      }
    }
    return options
  }

  return (
    <div>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label-startTime">
          startTime
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label-startTime"
          id="demo-simple-select-standard-startTime"
          value={scheduleData.startTime}
          name="startTime"
          onChange={onChang}
          label="startTime">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {createTimeOptions(6, 23, scheduleData.endTime)}
        </Select>
      </FormControl>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label-endTime">
          endTime
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label-endTime"
          id="demo-simple-select-standard-endTime"
          value={scheduleData.endTime}
          onChange={onChang}
          name="endTime"
          label="endTime"
          disabled={!scheduleData.startTime}>
          {createTimeOptions(
            scheduleData.startTime ? scheduleData.startTime + 1 : 7,
            24,
            null
          )}
        </Select>
      </FormControl>
    </div>
  )
}
