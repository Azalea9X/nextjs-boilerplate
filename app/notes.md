# Personal Website Tutorial With Next.js 13, Sanity.io, TailwindCSS, and TypeScript
Since it's embedded, we will automatically deploy the sanity studio as well. 

The project ID and dataset are very important for running. All of the content is in the cloud, it's in a content lake. We will go to the manage.sanity.io dashboard. That studio that we just made is the top one. Note that the project ID lives there, that's where we can invite project managers to go to it, and give them whatever role that we want them to have. 

Right now, our data is only allowed to be used on localhost:333

An example of GROQ. 

*[_type == "post" ]{
  title, 
    author->{
      name, 
      slug, 
      content,
      date
      
    }
}

We will want to embedd the entire sanity project into another app. The next thing we will do is make sure it's embedded into our next app. We will get our sanity studio, and, we will embed that right into our next.JS app. We have the sanity studio embedded into the admin folder. All we had to do is run npm run dev and we have it running in one URL. It's going to be way more seamless for users to go to the content page and start editing. We have no document types and we will create document types and schemas. Yay! I know how to do that, so, I will be watching. 

To start us off, let's add a project type. If you do type block you'll be able to do headings type bold, all the good WYSIWIG stuff. Let's create a brrrel file. 