import './Day8.css'

export default function Day8() {
    return (
        <div>
            <h1>Please Login</h1>
            <form>
                <div class="form-control">
                    <input type="text" required />
                    <label>Email</label>
                    <label>
                        <span style="transition-delay: 0ms">E</span>
                        <span style="transition-delay: 50ms">m</span>
                        <span style="transition-delay: 100ms">a</span>
                        <span style="transition-delay: 150ms">i</span>
                        <span style="transition-delay: 200ms">l</span>
                    </label>
                </div>
                <div class="form-control">
                    <input type="password" required />
                    <label>Password</label>
                </div>
                <button class="btn">Login</button>
                <p class="text">Don't have an account? <a href="#">Register</a> </p>
            </form>
        </div>
    )
}