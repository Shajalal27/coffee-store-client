import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const img = form.img.value;
        const newCoffee ={name, quantity, supplier, taste, category, details, img}
        console.log(newCoffee);


    fetch('https://coffee-store-server-dfyzx13q5-shajalals-projects.vercel.app/coffee', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Coffee added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-serif italic  font-extrabold text-center">Add New Coffee</h2>
            <p className="px-52 text-center pt-8">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={handleAddCoffee}>
                 {/* form name and quantity row */}
                <div className="flex gap-5 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="">
                            <input type="text" name="name" placeholder="Coffee Name"
                            className="input input-bordered w-full"/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="">
                            <input type="text" name="quantity" placeholder="Available Quantity"
                            className="input input-bordered w-full "/>
                        </label>
                    </div>
                </div>
                 {/* fom supplier and taste row */}
                <div className="flex gap-5 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="">
                            <input type="text" name="supplier" placeholder="Supplier"
                            className="input input-bordered w-full"/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="">
                            <input type="text" name="taste" placeholder="Taste"
                            className="input input-bordered w-full "/>
                        </label>
                    </div>
                </div>
                 {/* fom category and details row */}
                <div className="flex gap-5 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="">
                            <input type="category" name="category" placeholder="Category"
                            className="input input-bordered w-full"/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="">
                            <input type="text" name="details" placeholder="Details"
                            className="input input-bordered w-full "/>
                        </label>
                    </div>
                </div>
                 {/* fom Photo Url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="">
                            <input type="text" name="img" placeholder="Photo URL"
                            className="input input-bordered w-full"/>
                        </label>
                    </div>   
                </div>
                <input type="submit" value="Add Coffee"  className="btn btn-block bg-green-600"/>
            </form>
        </div>
    );
};

export default AddCoffee;