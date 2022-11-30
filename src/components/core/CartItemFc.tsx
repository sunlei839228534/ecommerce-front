import React, { ChangeEvent, FC, useState } from 'react'
import { CartItem, deleteItem, updateItem } from '../../helpers/cart'
import { Button, Image, Input } from 'antd'
import { API } from '../../config'

interface Props {
  setCart: (arg: CartItem[]) => void
  product: CartItem
}

const CartItemFc: FC<Props> = ({ product, setCart }) => {

  const [count, setCount] = useState<number>(product.count)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let count = parseInt(event.target.value)
    setCart(updateItem(product._id, count))
    setCount(count)
  }

  return (
    <tr className='ant-table-row' >
      <th className="ant-table-cell">
        <Image width={120} src={`${API}/product/photo/${product._id}`} />
      </th>
      <th className="ant-table-cell">{product.name}</th>
      <th className="ant-table-cell">{product.price}</th>
      <th className="ant-table-cell">{product.category.name}</th>
      <th className="ant-table-cell">
        <Input type='number' value={count} onChange={handleChange} />
      </th>
      <th className="ant-table-cell">
        <Button onClick={() => setCart(deleteItem(product._id))} danger type="primary">删除</Button>
      </th>
    </tr>
  )
}

export default CartItemFc