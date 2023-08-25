import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

import Product from 'App/Models/Product'

export default class ProductsController {
  public async store({ request }: HttpContextContract) {
    const newProduct = schema.create({
      name: schema.string(),
      image_url: schema.string(),
      type: schema.string(),
      price: schema.number(),
      seller: schema.string(),
      available_sizes: schema.array().members(schema.string()),
      details: schema.string(),
      sport: schema.string(),
    })

    try {
      const payload = await request.validate({
        schema: newProduct,
      })

      const products = await Product.create(payload)
      return {
        message: 'Criado com sucesso!',
        products,
      }
    } catch (error) {
      return {
        message:
          'Erro ao criar produto, todos os campo são necessários:,	"name","image_url","type","price","seller","available_sizes","details","sport",',
      }
    }
  }

  public async index() {
    const products = await Product.all()

    return {
      data: products,
    }
  }

  public async show({ params }: HttpContextContract) {
    const product = await Product.findOrFail(params.id)

    return {
      data: product,
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const product = await Product.findOrFail(params.id)

    await product.delete()

    return {
      message: 'Produto excluído com sucesso!',
      data: product,
    }
  }

  public async update({ params, request }: HttpContextContract) {
    const product = await Product.findOrFail(params.id)

    const newProduct = schema.create({
      name: schema.string(),
      image_url: schema.string(),
      type: schema.string(),
      price: schema.number(),
      seller: schema.string(),
      available_sizes: schema.array().members(schema.string()),
      details: schema.string(),
      sport: schema.string(),
    })

    try {
      const payload = await request.validate({
        schema: newProduct,
      })

      product.merge(payload)
      await product.save()
      return {
        message: 'Atualizado com sucesso!',
        data: product,
      }
    } catch (error) {
      return {
        message:
          'Erro ao editar produto, todos os campo são necessários:,	"name","image_url","type","price","seller","available_sizes","details","sport",',
      }
    }
  }
}
