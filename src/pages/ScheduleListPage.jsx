import { useEffect } from 'react'
import ScheduleAdd from '../components/ScheduleListPage/ScheduleAdd'
import { useDispatch, useSelector } from 'react-redux'
import { addGroupList, setGroupList } from '../api/Schedule/ScheduleGroup'

const ScheduleListPage = () => {
  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.users.user)
  const groupList = useSelector(state => state.groups.groups)
  console.log(groupList)

  useEffect(() => {
    if (userInfo) {
      dispatch(setGroupList(userInfo.token))
    }
  }, [userInfo, dispatch])
  const AddGroup = () => {
    dispatch(addGroupList(userInfo?.token))
  }
  return <ScheduleAdd AddGroup={AddGroup} />
}
export default ScheduleListPage
