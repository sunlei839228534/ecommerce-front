import React, { FC } from 'react'
import { Typography, Button, Card, Row, Col, Image } from 'antd'
import { Link } from 'react-router-dom'
import { Product } from '../../store/models/product'
import { API } from '../../config'
import moment from 'moment'
import { addItem } from '../../helpers/cart'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'

const { Title, Paragraph } = Typography

interface Props {
  product: Product,
  showViewProduct?: boolean,
  showCartButton?: boolean,
}

const ProductItem: FC<Props> = ({ product, showViewProduct = true, showCartButton = true }) => {

  const dispatch = useDispatch()

  const addToCart = () => {
    addItem(product, () => {
      dispatch(push("/cart"))
    })
  }

  const showButtons = () => {
    let buttonArray = []
    if (showViewProduct) {
      buttonArray.push(<Button type='link'>
        <Link to={`/product/${product._id}`} >查看详情</Link>
      </Button>)
    }
    if (showCartButton) {
      buttonArray.push(<Button type="link" onClick={addToCart}>
        加入购物车
      </Button>)
    }
    return buttonArray
  }

  return (
    <Card
      cover={
        <Image src={`${API}/product/photo/${product._id}`} alt={product.name} />
      }
      actions={showButtons()}
    >
      <Title level={5}>{product.name}</Title>
      <Paragraph ellipsis={{ rows: 2 }}>{product.description}</Paragraph>
      <Row>
        <Col span="12">销量:{product.sold}</Col>
        <Col span="12" style={{ textAlign: 'right' }}>价格:{product.price}</Col>
      </Row>
      <Row>
        <Col span="12">上架时间:{moment(product.createdAt).format("YYYY-MM-DD ")}</Col>
        <Col span="12" style={{ textAlign: 'right' }}>所属分类:{product.category.name}</Col>
      </Row>
    </Card>
  )
}

export default ProductItem