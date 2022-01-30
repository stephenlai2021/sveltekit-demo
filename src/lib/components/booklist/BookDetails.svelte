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
    <!-- <h3 on:click={() => handleDelete(book)}>{book.title}</h3> -->
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
  }
  .selected {
    color: red;
  }
  .icon {
    cursor: pointer;
    /* border: 1px solid; */
    display: flex;
    /* align-items: flex-start; */
    padding-top: 5px;
    margin-left: 10px;
  }
  h3 {
    cursor: pointer;
    /* border: 1px solid; */
  }
  h3:hover {
    text-decoration: line-through;
  }
  li {
    list-style: none;
    border: 1px solid white;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .details {
    /* display: flex; */
  }
</style>