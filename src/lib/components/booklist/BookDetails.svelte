<script>
  import { db } from '$lib/firebase/client'
  import { doc, deleteDoc, updateDoc } from 'firebase/firestore'

  export let book
  
  let toggle = false
  
  const handleDelete = async (book) => {
    let docRef = doc(db, 'books', book.id)
    await deleteDoc(docRef)
  }
  
  const handleUpdate = async (book) => {
    let docRef = doc(db, 'books', book.id)
    
    await updateDoc(docRef, {
      isFav: !book.isFav
    })    
  }
</script>

<li>
  <div class="details">
    <h3 class:picked={toggle} on:click={() => toggle = !toggle}>{book.title}</h3>
    <p>By {book.author}</p>
  </div>
  <div class="icons">
    <div class="icon" on:click={() => handleDelete(book)}>
      <span class="material-icons">delete</span>
    </div>
    <div class="icon" on:click={() => handleUpdate(book)}>
      <span class:selected={book.isFav} class="material-icons">favorite</span>
    </div>
  </div>
</li>

<style>
  .icons {
    display: flex;
  }

  .picked {
    text-decoration: line-through;
    color: gray;
  }

  .selected {
    color: red;
  }

  /* .material-icons {
    border: 1px solid;
  } */

  /* .icons {
    border: 1px solid;
    height: 32px;
  } */

  .icon {
    cursor: pointer;
    display: flex;
    padding-top: 5px;
    margin-left: 10px;
  }

  .details h3 {
    cursor: pointer;

    white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
    max-width: 400px;
  }
  
  li {
    list-style: none;
    border: 1px solid white;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 500px;

  }
</style>