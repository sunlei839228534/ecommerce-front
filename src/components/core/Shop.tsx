import { Button, Col, Empty, Row, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterProduct } from '../../store/actions/product.actions'
import { AppState } from '../../store/reducers'
import { ProductState } from '../../store/reducers/product.reducer'
import CheckBox from './CheckBox'
import Layout from "./Layout"
import ProductItem from './ProductItem'
import RadioBox from './RadioBox'

const Shop = () => {
  const dispatch = useDispatch()

  const [skip, setSkip] = useState<number>(0)

  const product = useSelector<AppState, ProductState>(state => state.product)

  const [myFilters, setMyFilters] = useState<{ category: string[], price: number[] }>({
    category: [],
    price: []
  })

  useEffect(() => {
    setSkip(0)
  }, [myFilters])

  useEffect(() => {
    dispatch(filterProduct({
      filters: myFilters,
      skip
    }))
  }, [myFilters, skip])


  const loadMore = () => {
    setSkip(skip + 4)
  }

  const NoData = () => {
    return <>
      <Row>
        {product.filter.result.size === 0 && <Empty />}
      </Row>
    </>
  }

  const filterDOM = () => <>
    <Space size="middle" direction="vertical">
      <CheckBox handleFilter={(filters: string[]) => {
        setMyFilters({ ...myFilters, category: filters })
      }} />
      <RadioBox handleFilter={(filters: number[]) => {
        setMyFilters({ ...myFilters, price: filters })
      }} />
    </Space>
  </>

  const productDOM = () => {
    return (<Row gutter={[16, 16]}>
      {product.filter.result.data.map(item => (
        <Col key={item._id} span="6">
          <ProductItem product={item} />
        </Col>
      ))}
    </Row>)
  }

  const loadMoreButton = () => {
    return <Row>
      {product.filter.result.size >= 4 ? <Button onClick={loadMore}>加载更多</Button> : <NoData />}
    </Row>
  }


  return (<div>
    <Layout title='拉钩商城' subTitle='挑选你喜欢的商品吧'>
      Shop
      <Row>
        <Col span="4">{filterDOM()}</Col>
        <Col span="20">{productDOM()}{loadMoreButton()}</Col>
      </Row>
    </Layout>
  </div>)
}

export default Shop