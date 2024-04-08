import { useEffect } from 'react'
import ScheduleAdd from '../components/ScheduleListPage/ScheduleAdd'
import { useDispatch, useSelector } from 'react-redux'
import { addGroupList, setGroupList } from '../api/Schedule/ScheduleGroup'
import ScheduleBox from '../components/ScheduleListPage/ScheduleBox'
import styled from 'styled-components'

const ScheduleListPage = () => {
  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.users.user)
  const groupList = useSelector(state => state.groups.groups)

  useEffect(() => {
    if (userInfo) {
      dispatch(setGroupList(userInfo.token))
    }
  }, [userInfo, dispatch])
  const AddGroup = () => {
    dispatch(addGroupList(userInfo.token))
  }
  console.log(groupList)
  return (
    <>
      <GroupListContainer>
        <ScheduleAdd AddGroup={AddGroup} />

        {groupList.data?.map(data => (
          <ScheduleBox
            key={data.id}
            title={data.title}
            code={data.code}
          />
        ))}
      </GroupListContainer>
    </>
  )
}
export default ScheduleListPage

const GroupListContainer = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2vw;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
