import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { closeCreateModal } from '../../redux/modules/modal/createGroup'
import { addGroupList } from '../../api/Schedule/ScheduleGroup'

function CreactGroupModal() {
  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.users)
  const { isOpen } = useSelector(state => state.createModal)
  console.log(userInfo)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)

  if (!isOpen) return null

  const handleSubmit = async () => {
    if (file) {
      try {
        await dispatch(
          addGroupList(userInfo.user.token, title, description, file)
        )
        dispatch(closeCreateModal())
        setTitle('')
        setDescription('')
      } catch (error) {
        console.error('Failed to create group:', error)
      }
    } else {
      console.warn('No file selected')
    }
  }
  const closeModal = () => {
    dispatch(closeCreateModal())
  }

  return (
    <ModalBackdrop>
      <ModalBox>
        <TitleBox>
          <MainTitle>그룹 만들기</MainTitle>
          <Explanation>생성할 그룹의 정보를 입력해 주세요</Explanation>
        </TitleBox>
        <ThumbnailBox>
          <SubTitle>썸네일 선택</SubTitle>
          <input
            type="file"
            onChange={e => setFile(e.target.files[0])}
          />
        </ThumbnailBox>
        <GroupName>
          <SubTitle>그룹 이름</SubTitle>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Title"
          />
        </GroupName>
        <GroupExplanation>
          <SubTitle>그룹 설명</SubTitle>
          <input
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Description"
          />
        </GroupExplanation>
        <BtnPostion>
          <CreateBtn onClick={handleSubmit}>그룹 만들기</CreateBtn>
          <CancelBtn onClick={closeModal}>취소</CancelBtn>
        </BtnPostion>
      </ModalBox>
    </ModalBackdrop>
  )
}

export default CreactGroupModal

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

const ModalBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 22.916666666666664vw;
  height: 64.81481481481481vh;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 2.083333333333333vw;
  color: #303494;
`

const TitleBox = styled.div`
  height: 6.7592592592592595vh;
  border-bottom: 1px solid #9da2ff;
`

const MainTitle = styled.p`
  font-size: 1.6vw;
  font-weight: bold;
`

const Explanation = styled.p`
  font-size: 0.6vw;
  margin-top: 0.5vh;
  color: #6065d3;
`

const SubTitle = styled.p`
  font-size: 1vw;
  margin-bottom: 1.4814814814814816vh;
`

const ThumbnailBox = styled.div`
  height: 14.814814814814813vh;
  margin-top: 3.7037037037037033vh;
  margin-bottom: 1.4814814814814816vh;
`

const GroupName = styled.div`
  height: 7.037037037037037vh;
  margin-top: 3.7037037037037033vh;
  margin-bottom: 1.4814814814814816vh;
`

const GroupExplanation = styled.div`
  height: 10.74074074074074vh;
  margin-top: 3.7037037037037033vh;
  margin-bottom: 1.4814814814814816vh;
`

const BtnPostion = styled.div`
  display: flex;
`

const CreateBtn = styled.button`
  width: 4.947916666666666vw;
  height: 3.648148148148148vh;
  border-radius: 4px;
  background-color: #9da2ff;
  color: #ffffff;
  font-size: 0.7vw;
  border: none;
`

const CancelBtn = styled.button`
  width: 4.947916666666666vw;
  height: 3.648148148148148vh;
  border-radius: 4px;
  background-color: #9da2ff;
  color: #ffffff;
  font-size: 0.7vw;
  border: none;
`
