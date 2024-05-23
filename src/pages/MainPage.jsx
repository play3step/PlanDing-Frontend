import ListContainer from '../components/MainPage/ListContainer'
import MainSideMenu from '../components/SideMenu/MainSideMenu/MainSideMenu'
import ScheduleEventSide from '../components/SideMenu/MainSideMenu/ScheduleEventSide'
import ScheduleGroupSide from '../components/SideMenu/MainSideMenu/ScheduleGroupSide'

const MainPage = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
        <MainSideMenu />
        <div
          style={{
            display: 'flex'
          }}>
          <ScheduleGroupSide />
          <ScheduleEventSide />
        </div>
      </div>
      <ListContainer />
    </>
  )
}

export default MainPage
