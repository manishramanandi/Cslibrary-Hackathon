<!-- App.svelte -->
<script>
    import { Router, Link, Route } from "svelte-navigator";
    import Home from "./Component/Home.svelte";
    import Books from "./Component/Books.svelte";
    import About from "./Component/About.svelte";
    import Contact from "./Component/Contact.svelte";
    import Login from "./Component/Login.svelte";
    import Signup from "./Component/Signup.svelte";
    import Footer from "./Component/Footer.svelte";
</script>

<Router>
    <nav></nav>
    <div>
        <Route path="/" component={Home} />
        <!-- <Route path="/" component={Footer} /> -->
        <Route path="/about" component={About} />
        <Route path="/books" component={Books} />
        <Route path="/contact" component={Contact} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
    </div>
</Router>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
