import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Language } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage } from '../Redux/Action/language'
import { useTranslation } from 'react-i18next'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const lang = localStorage.getItem("i18nextLng")
  const {i18n} = useTranslation()
  const dispatch = useDispatch()
  const handleCLick = (lang) => {
    changeLanguage(dispatch, lang)
    i18n.changeLanguage(lang)
  }
  const langs = [
    {
      id : 1,
      lang : 'en'
    },
    {
      id : 2,
      lang : 'tm'
    },
    {
      id : 3,
      lang : 'ru'
    },
  ]
  return (
    <Menu as="div" className="relative inline-block text-left ">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 uppercase rounded-md bg-white px-3 items-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {lang} 
          <Language className="-mr-1  w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-35 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {
              langs.map((data) => {
                return(
                  <Menu.Item key={data.id}>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          handleCLick(data.lang)
                        }}
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm uppercase'
                        )}
                      >
                        {data.lang}
                      </button>
                    )}
                  </Menu.Item>
                )
              })
            }
            
          
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
