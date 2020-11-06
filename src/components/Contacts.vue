<template>
  <div>
    <form class="ui form">
      <div class="field">
        <label>First Name</label>
        <h3  v-if="!edit"></h3><h3 v-if="edit">Update User</h3>
        <input v-model="text" type="text" name="add.name" placeholder="Name">
      </div>
      <div class="field">
        <label>Email</label>
        <h3  v-if="!edit"></h3><h3 v-if="edit">Update User</h3>
        <input v-model="text" type="text" name="last-name" placeholder="Email">
      </div>
      <div class="field">
        <label>Phone</label>
        <h3  v-if="!edit"></h3><h3 v-if="edit">Update User</h3>
        <input v-model="text" type="text" name="Phone" placeholder="Phone">
      </div>
      <div class="field">
        <label>Type</label>
        <h3  v-if="!edit"></h3><h3 v-if="edit">Update User</h3>
        <input v-model="text" type="text" name="Professional/Personal" placeholder="Professional/Personal">
       
      </div>
      
      <button class="ui button" type="submit">Submit</button>
 
    </form>
    <div class="ui cards">
  <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src="/images/avatar/large/elliot.jpg">
      <div class="header">
        Elliot Fu
      </div>
      <div class="meta">
        Friends of Veronika
      </div>
      <div class="description">
        Elliot requested permission to view your contact details
      </div>
      <div class="ui list">
  <div class="item">
    <i class="users icon"></i>
    <div class="content">
      Semantic UI
    </div>
  </div>
  <div class="item">
    <i class="marker icon"></i>
    <div class="content">
      New York, NY
    </div>
  </div>
  <div class="item">
    <i class="mail icon"></i>
    <div class="content">
      <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
    </div>
  </div>
  <div class="item">
    <i class="linkify icon"></i>
    <div class="content">
      <a href="http://www.semantic-ui.com">semantic-ui.com</a>
    </div>
  </div>
</div>
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic green button">Add</div>
        <div class="ui basic red button">Delete</div>
      </div>
    </div>
  </div>

      <div class="card">
        <div class="content">
          <img class="right floated mini ui image" src="/images/avatar/large/jenny.jpg">
          <div class="header">
            Jenny Hess
          </div>
          <div class="meta">
            New Member
          </div>
          <div class="description">
            Jenny wants to add you to the group <b>best friends</b>
          </div>
        </div>
        <div class="ui list">
      <div class="item">
        <i class="users icon"></i>
        <div class="content">
          Semantic UI
        </div>
      </div>
      <div class="item">
        <i class="marker icon"></i>
        <div class="content">
          New York, NY
        </div>
      </div>
      <div class="item">
        <i class="mail icon"></i>
        <div class="content">
          <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
        </div>
      </div>
      <div class="item">
        <i class="linkify icon"></i>
        <div class="content">
          <a href="http://www.semantic-ui.com">semantic-ui.com</a>
        </div>
      </div>
    </div>
        <div class="extra content">
          <div class="ui two buttons">
            <div class="ui basic green button">Add</div>
            <div class="ui basic red button">Delete</div>
          </div>
        </div>
      </div>
    </div>

  </div>
  
</template>

<script>

</script>
