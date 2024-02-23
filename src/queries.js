import { gql } from '@apollo/client'

const getAllMenus = gql`{
  menus {
    id
    identifier
    label
    state
    startDate
    endDate
    sections {
      id
      identifier
      label
      description
      items {
        id
        itemType
        identifier
        label
        description
        price
        modifierGroups {
          id
          identifier
          label
          selectionRequiredMin
          selectionRequiredMax
          modifiers {
            id
            priceOverride
            item {
              id
              itemType
              identifier
              label
              description
              price
            }
          }
        }
      }
    }
  }
}`

export { getAllMenus }