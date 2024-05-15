"use client";
import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { State } from "country-state-city";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { totalPriceSelector, clearById } from "@/app/store/cartSlice";
import Link from "next/link";
import Image from "next/image";
import useMember from "@/hook/useMember";
import axios from "axios";
import { useRouter } from 'next/navigation';
import {  clearAll } from '@/app/store/cartSlice'

const deliveryMethods = [
  { id: 1, title: "Bình Thường", turnaround: "3-5 ngày", price: 10000 },
  { id: 2, title: "Nhanh", turnaround: "1-2 ngày", price: 50000 },
];
const paymentMethods = [
  { id: "visa", title: "Visa" },
  { id: "paypal", title: "PayPal" },
  { id: "etransfer", title: "Ngân Hàng" },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Payment() {
  const cities = State.getStatesOfCountry("VN");
  const router = useRouter();

  const { data, isLoading } = useMember();
  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
    city: "Hồ Chí Minh",
    phone: "",
  });

  useEffect(() => {
    setForm({
      ...form,
      name: data?.name,
      email: data?.email,
      city: data?.city,
    });
  }, [isLoading]);

  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
    deliveryMethods[0]
  );
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalPrice = useAppSelector(totalPriceSelector);
  const total = selectedDeliveryMethod.price + totalPrice;

  async function testcart(payload:any) {
    await axios.post("/api/cart",payload).then((res) => {
      router.push(`/cart/confirm/${res.data.id}`)
      dispatch(clearAll())
    }).catch((err) => console.log(err));
  }

  return (
    <section className="pb-10">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <div>
            <h2 className="text-lg font-medium text-gray-900">
              Thông Tin Giao Hàng
            </h2>
            <div className="mt-6 border-t border-gray-200">
              <div className="mt-4 grid gap-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Họ và Tên
                  </label>
                  <div className="mt-1">
                    <input required
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="family-name"
                      value={form.name}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input required
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      value={form.email}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Tỉnh/TP
                  </label>
                  <div className="mt-1">
                    <select
                      defaultValue={form.city}
                      onChange={(e) =>
                        setForm({ ...form, city: e.target.value })
                      }
                      className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
                    >
                      {cities.map((city) => {
                        return (
                          <option key={city.isoCode} value={city.name}>
                            {city.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Địa Chỉ
                  </label>
                  <div className="mt-1">
                    <input required
                      onChange={(e) =>
                        setForm({ ...form, address: e.target.value })
                      }
                      type="text"
                      name="address"
                      id="address"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Số Điện Thoại
                  </label>
                  <div className="mt-1">
                    <input required
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <RadioGroup
                value={selectedDeliveryMethod}
                onChange={setSelectedDeliveryMethod}
              >
                <RadioGroup.Label className="text-lg font-medium text-gray-900">
                  Phương Thức Giao Hàng
                </RadioGroup.Label>

                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  {deliveryMethods.map((deliveryMethod) => (
                    <RadioGroup.Option
                      key={deliveryMethod.id}
                      value={deliveryMethod}
                      className={({ checked, active }) =>
                        classNames(
                          checked ? "border-transparent" : "border-gray-300",
                          active ? "ring-2 ring-rose-500" : "",
                          "relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none"
                        )
                      }
                    >
                      {({ checked, active }) => (
                        <>
                          <span className="flex flex-1">
                            <span className="flex flex-col">
                              <RadioGroup.Label
                                as="span"
                                className="block text-sm font-medium text-gray-900"
                              >
                                {deliveryMethod.title}
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="span"
                                className="mt-1 flex items-center text-sm text-gray-500"
                              >
                                {deliveryMethod.turnaround}
                              </RadioGroup.Description>
                              <RadioGroup.Description
                                as="span"
                                className="mt-6 text-sm font-medium text-gray-900"
                              >
                                {deliveryMethod.price.toLocaleString()} VNĐ
                              </RadioGroup.Description>
                            </span>
                          </span>
                          {checked ? (
                            <FontAwesomeIcon
                              icon={"check-circle"}
                              className="h-5 w-5 text-rose-600"
                              aria-hidden="true"
                            />
                          ) : null}
                          <span
                            className={classNames(
                              active ? "border" : "border-2",
                              checked
                                ? "border-rose-500"
                                : "border-transparent",
                              "pointer-events-none absolute -inset-px rounded-lg"
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Payment */}
            <div className="mt-10 border-t border-gray-200 pt-10">
              <h2 className="text-lg font-medium text-gray-900">Thanh Toán</h2>

              <fieldset className="mt-4">
                <legend className="sr-only">Chọn</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                  {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
                    <div key={paymentMethod.id} className="flex items-center">
                      {paymentMethodIdx === 0 ? (
                        <input
                          id={paymentMethod.id}
                          name="payment-type"
                          type="radio"
                          defaultChecked
                          className="h-4 w-4 border-gray-300 text-rose-600 focus:ring-rose-500"
                        />
                      ) : (
                        <input
                          id={paymentMethod.id}
                          name="payment-type"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-rose-600 focus:ring-rose-500"
                        />
                      )}

                      <label
                        htmlFor={paymentMethod.id}
                        className="ml-3 block text-sm font-medium text-gray-900"
                      >
                        {paymentMethod.title}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>

          {/* Order summary */}
          <div className="mt-10 lg:mt-0">
            <h2 className="text-lg font-medium text-gray-900">Tổng Quan</h2>

            <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
              <h3 className="sr-only">Hàng Trong Giỏ</h3>
              <ul role="list" className="divide-y divide-gray-200">
                {cartItems.map((item) => {
                  const image = (item.product.images || [])[0];
                  return (
                    <li
                      key={item.product.id}
                      className="flex px-4 py-6 sm:px-6"
                    >
                      <div className="flex-shrink-0">
                        <Image
                          src={image?.url}
                          alt={item.product.name}
                          className="rounded-md"
                          width={80}
                          height={80}
                        />
                      </div>

                      <div className="ml-6 flex flex-1 flex-col">
                        <div className="flex">
                          <div className="min-w-0 flex-1">
                            <h4 className="text-sm">
                              <Link
                                href={"/products/" + item.product.slug}
                                className="font-medium text-gray-900 hover:text-gray-800"
                              >
                                {item.product.name}
                              </Link>
                            </h4>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.product.color.name}
                            </p>
                          </div>

                          <div className="ml-4 flow-root flex-shrink-0">
                            <button
                              onClick={() => {
                                dispatch(clearById(item.product.id));
                              }}
                              type="button"
                              className="-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-600 hover:text-red-600"
                            >
                              <span className="sr-only">Remove</span>
                              <FontAwesomeIcon
                                icon={"trash"}
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="flex flex-1 items-end justify-between pt-2">
                          <p className="mt-1 text-sm font-medium text-gray-900">
                            {item.product.price.toLocaleString()} VNĐ
                          </p>

                          <div className="ml-4">
                            <label htmlFor="quantity" className="sr-only">
                              Quantity
                            </label>
                            <input
                              type="text"
                              name="quantity"
                              id="quantity"
                              value={item.inCart}
                              disabled
                              className="w-10 rounded-md"
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <dl className="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex items-center justify-between">
                  <dt className="text-sm">Tạm Tính</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    {totalPrice.toLocaleString()} VNĐ
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm">Phí Vận Chuyển</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    {totalPrice > 0
                      ? selectedDeliveryMethod.price.toLocaleString()
                      : 0}{" "}
                    VNĐ
                  </dd>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <dt className="text-base font-medium">Tổng</dt>
                  <dd className="text-base font-medium text-gray-900">
                    {totalPrice > 0 ? total.toLocaleString() : 0} VNĐ
                  </dd>
                </div>
              </dl>

              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <button
                  onClick={() => testcart({...form,status:'isPending',total:total})}
                  className="w-full rounded-md border border-transparent bg-rose-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Xác Nhận
                </button>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
