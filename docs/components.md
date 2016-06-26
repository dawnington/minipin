## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * MenuBar
    * MenuIndex
    * MenuIndexItem
    * NewBoardForm   
  * **BoardDetail**
    * PinIndex
      * PinIndexItem
  * **User**
    * **Boards**
      * BoardIndex
        * BoardIndexItem
    * **Pins**
      * PinIndex
        * PinIndexItem
  * **PinDetail**
    * PinForm

## Routes

* **component:** `App` **path:** `/`
  * **component:** `BoardDetail` **path:** `boards/:boardId`
  * **component:** `UserDetail` **path:** `users/:userId`
    * **component:** `BoardIndex` **path:** `users/:userId/boards`
    * **component:** `PinIndex` **path:** `users/:userId/pins`
  * **component:** `PinDetail` **path:** `pins/:pinId`
