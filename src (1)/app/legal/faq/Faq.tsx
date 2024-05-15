'use client'
import { Disclosure } from '@headlessui/react'
// import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMinus,faPlus} from '@fortawesome/free-solid-svg-icons'
const faqs = [
  {
    question: "Bạn nhận xét như thế nào về bản thân?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur laborum numquam quidem maxime iusto velit dolores molestias odit magnam reiciendis illo atque ea amet cupiditate perferendis veniam, asperiores possimus?",
  },
  {
    question: "Bạn Chắc Chứ",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur laborum numquam quidem maxime iusto velit dolores molestias odit magnam reiciendis illo atque ea amet cupiditate perferendis veniam, asperiores possimus?",
  },
  {
    question: "Thông tin liên hệ",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur laborum numquam quidem maxime iusto velit dolores molestias odit magnam reiciendis illo atque ea amet cupiditate perferendis veniam, asperiores possimus?",
  },
  // More questions...
]

export default function Faq() {
  return (
    <section className=" divide-y divide-gray-900/10">
      <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Câu hỏi thường gặp</h2>
      <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
        {faqs.map((faq) => (
          <Disclosure as="div" key={faq.question} className="pt-6">
            {({ open }) => (
              <>
                <dt>
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      {open ? (
                        <FontAwesomeIcon icon={faMinus} className="h-6 w-6" aria-hidden="true" />
                      ) : (
                        <FontAwesomeIcon icon={faPlus} className="h-6 w-6" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </section>
  )
}
