---
sidebar_position: 2
title: List and detail views
---

# List and View Items

During the first steps of most Web and Mobile applications, you will need to create a list of items that can be
displayed in a table or a list view.

Usually, you will also need

- a create a form to add new items to the list and a form to edit existing items in the list,
- add a search feature to the list,
- detail view to display the details of an item,
- and a delete feature to delete an item from the list.

This is a very common feature that is present in most applications.

And, **NEST** makes it very easy to create this feature.

## Supported Operations

- Create a new item.
- List items.
- Search items.
- Update an item.
- Delete an item.

## Structure of an Item

An item is a JSON object that has a unique ID, a set of properties, and an inner object which can be used to store any
additional data.

```json
{
  "id": "{UUID}",
  "slug": "item-name",
  "title": "Item Name",
  "description": "Item description",
  "tags": ["tag1", "tag2"],
  "meta": {
    "key1": "value1",
    "key2": "value2"
  },
  "innerObject": {}
}
```

<br /><br /><br />

---

#### Doc's metadata:

- Created: 2023-08-07
- Last updated: 2023-08-07

Something missing or want to request an additional feature? [Message me](https://twitter.com/KenanBekk) or email me
here: `ken [at] AppBaza [dot] com`.
