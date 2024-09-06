<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;

class CustomerController extends Controller
{
    
    public function all_customer(){
         $customers = Customer::orderBy('id','DESC')->get();

        // $customers = Customer::all();

        return response()->json([
            'customers' => $customers
        ],200);
    }
}
