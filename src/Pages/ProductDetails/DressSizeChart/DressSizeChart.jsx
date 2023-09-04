import React from 'react';

const DressSizeChart = () => {
    return (
        <div className="bg-gray-600 text-white p-4 rounded-lg mt-2">
            <h2 className="text-2xl font-semibold mb-4">Dress Size Chart</h2>
            <table className="text-center w-full mx-auto">
                <thead>
                    <tr>
                        <th className="py-2">Size</th>
                        <th className="py-2">Bust (inches)</th>
                        <th className="py-2">Waist (inches)</th>
                        <th className="py-2">Hip (inches)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2">XS</td>
                        <td className="py-2">31-32</td>
                        <td className="py-2">24-25</td>
                        <td className="py-2">34-35</td>
                    </tr>
                    <tr>
                        <td className="py-2">S</td>
                        <td className="py-2">33-34</td>
                        <td className="py-2">26-27</td>
                        <td className="py-2">36-37</td>
                    </tr>
                    <tr>
                        <td className="py-2">M</td>
                        <td className="py-2">35-36</td>
                        <td className="py-2">28-29</td>
                        <td className="py-2">38-39</td>
                    </tr>
                    <tr>
                        <td className="py-2">L</td>
                        <td className="py-2">37-39</td>
                        <td className="py-2">30-32</td>
                        <td className="py-2">40-42</td>
                    </tr>
                    <tr>
                        <td className="py-2">XL</td>
                        <td className="py-2">40-42</td>
                        <td className="py-2">33-35</td>
                        <td className="py-2">43-45</td>
                    </tr>
                    <tr>
                        <td className="py-2">XXL</td>
                        <td className="py-2">43-45</td>
                        <td className="py-2">36-38</td>
                        <td className="py-2">46-48</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DressSizeChart;
