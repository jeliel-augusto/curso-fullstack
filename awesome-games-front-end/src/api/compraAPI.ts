import { Compra } from "../models/Compra";
import { Game } from "../models/Game";
import axios from "axios";
import { ItemCompra } from "../models/ItemCompra";
export class CompraAPI {
  static async getCompras(): Promise<Compra[]> {
    const request = await axios.get<Compra[]>(
      `${process.env.NEXT_PUBLIC_API_URL}/client/2/purchases`
    );
    return request.data;
  }
  static async buyGame(
    itensCompra: ItemCompra[],
    idUser: number
  ): Promise<Compra> {
    const request = await axios.post<Compra>(
      `${process.env.NEXT_PUBLIC_API_URL}/client/${idUser}/buy`,
      itensCompra
    );
    return request.data;
  }
  static async delete(id: number): Promise<void> {
    await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/client/purchases/${id}`
    );
  }
  static async getById(id: number) {
    const request = await axios.get<Compra>(
      `${process.env.NEXT_PUBLIC_API_URL}/client/purchases/${id}`
    );
    return request.data;
  }
  static async update(id: number, itensCompra: ItemCompra[]): Promise<Compra> {
    const request = await axios.put<Compra>(
      `${process.env.NEXT_PUBLIC_API_URL}/client/purchases/${id}`,
      itensCompra
    );
    return request.data;
  }
}
