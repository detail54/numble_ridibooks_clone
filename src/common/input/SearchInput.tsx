import React from 'react'
// interface
import { ISearchInput } from '../interface/interface'
// style
import { InputSC } from './SearchInput.styles'

const SearchInput: React.FC<ISearchInput> = (props) => {
  const {
    searchText,
    placeholder,
    onChange,
    onRemove,
    openCancelButton,
    onFocus,
    onBlur,
    styles,
  } = props

  const cancleButton = openCancelButton ? (
    <InputSC.CancleButton onClick={(event) => onRemove && onRemove(event)}>
      <InputSC.CancleIcon viewBox='0 0 14 14' aria-label='지우기'>
        <path
          fill='currentColor'
          d='M9.983 9.238l-.745.745L7 7.746 4.761 9.983l-.745-.745L6.254 7 4.016 4.761l.745-.745L7 6.254l2.238-2.238.745.745L7.746 7l2.237 2.238zM7 0a7 7 0 00-7 7 7 7 0 107-7z'
        />
      </InputSC.CancleIcon>
    </InputSC.CancleButton>
  ) : (
    <></>
  )

  return (
    <InputSC.Form maxWidth={styles && styles.maxWidth}>
      <InputSC.Div>
        <InputSC.SearchIcon viewBox='0 0 24 24' aria-label='인스턴트 검색'>
          <path
            fill='currentColor'
            d='M9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm6 0h-.79l-.28-.27a6.49 6.49 0 001.476-5.34c-.465-2.783-2.788-4.998-5.588-5.34a6.503 6.503 0 00-7.268 7.27c.342 2.8 2.556 5.122 5.34 5.587a6.487 6.487 0 005.34-1.477l.27.28v.79l4.645 4.636a.502.502 0 00.708 0l.782-.782a.5.5 0 000-.708L15.5 14z'
          />
        </InputSC.SearchIcon>
        <InputSC.Input
          placeholder={placeholder}
          value={searchText}
          onChange={(event) => onChange(event.currentTarget.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          {...styles}
        />
        {cancleButton}
      </InputSC.Div>
    </InputSC.Form>
  )
}

export default SearchInput
