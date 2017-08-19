// module.exports = {
// 	a : function(){
// 		alert('我的a')
// 	},
// 	b : function(){
// 		alert('我是b')
// 	},
// 	c : [1,2,3],
// 	d : 'sky'
// };

// 建议这样导出
export default {
	a : function(){
		alert('我的a')
	},
	b : function(){
		alert('我是b')
	},
	c : [1,2,3],
	d : 'sky'
};

// 一个一个函数也可以导出，接收就是{a,b}
// export function b(){
// 	alert('我也是bbb')
// }

// export function a(){
// 	alert('我也是aaa')
// }

 

// 在这里定义公共函数，需要的时候调用即可，只用export会报错
// 用module.exports = {} 或者export default {} 都可以导出json