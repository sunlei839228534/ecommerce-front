import React, { FC, useEffect } from 'react'
import { List, Typography, Checkbox as AntdCheckBox } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../store/actions/category.actions'
import { AppState } from '../../store/reducers'
import { CategoryState } from '../../store/reducers/category.reducer'
import { CheckboxValueType } from 'antd/lib/checkbox/Group'


interface Props {
  handleFilter: (filters: string[]) => void
}

const { Title } = Typography

const CheckBox: FC<Props> = ({ handleFilter }) => {
  const dispatch = useDispatch()

  const category = useSelector<AppState, CategoryState>(state => state.category)

  useEffect(() => {
    dispatch(getCategory())
  }, [])

  const onChange = (checkedValue: CheckboxValueType[]) => {
    handleFilter(checkedValue as string[])
  }

  return (
    <>
      <Title level={4}>按照分类筛选</Title>
      <AntdCheckBox.Group
        className='checkBoxFilter'
        onChange={onChange}
        options={category.category.result.map(item => ({ label: item.name, value: item._id }))}
      ></AntdCheckBox.Group>
    </>
  )
}

export default CheckBox