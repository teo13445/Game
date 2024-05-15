'use client'
import { Disclosure } from '@headlessui/react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas)

export default function DisclosureItem(props:any) {
  const methods = props.props.methods.map((method:any,index:number) =>{
    return(
      <a href={method.url} target='_blank' key={index}>
        <div className='flex justify-between items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100'>
          <div className='flex gap-x-4 items-center'>
            {method.method == 'GET' && <div className='bg-lime-100 text-lime-600 py-1 px-3 rounded-md'>{method.method}</div>}
            {method.method == 'POST' && <div className='bg-amber-100 text-amber-600 py-1 px-3 rounded-md'>{method.method}</div>}
            {method.method == 'DELETE' && <div className='bg-red-100 text-red-600 py-1 px-3 rounded-md'>{method.method}</div>}
            {method.method == 'PUT/PATCH' && <div className='bg-sky-100 text-sky-600 py-1 px-3 rounded-md'>{method.method}</div>}
            <div className='font-bold text-gray-800'>{method.url}</div>
          </div>
          <div className='text-sm text-gray-600'>
            {method.desc}
          </div>
      </div>
    </a>
    )
  })
  return (
    <div className="w-full">
      <div className="mx-auto w-full rounded-2xl bg-white">
        <Disclosure defaultOpen={props.props?.open ? true : false}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex gap-x-4 justify-between rounded-lg bg-rose-100 text-left font-medium text-rose-600 hover:bg-rose-200 px-4 py-2 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                <span>{props.props.title}</span>
                <FontAwesomeIcon icon='chevron-up'
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-rose-600`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pt-4 pb-2  text-gray-900 flex flex-col gap-y-2" >
                  {methods}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
