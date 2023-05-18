const h = (tag, props, children) => {
    // vnode ==> javascript对象{}
    return {
        tag,
        props,
        children
    }
}

const mount = (vnode,container) => {
   const el = vnode.el = document.createElement(vnode.tag);
   //设置属性
   
   if(vnode.props) {
       for(const key in vnode.props) {
           const value = vnode.props[key];
           //判断key如果是以on开头,说明是事件监听函数
           //需要作边界值判断
           if(key.startsWith === 'on') {
               //事件监听以驼峰命名，此处应该作小写转化    
               el.addEventListener(key.slice(2).toLocaleLowerCase(),value);
           } else {
            el.setAttribute(key,value);
           }
       }
   }
   if(vnode.children) {
       if(typeof vnode.children === 'string') {
           el.textContent = vnode.children;
       } else {
           vnode.children.forEach(item => {
               mount(item, el);
           })
       }
   }    
   //挂载el到container上 
   container.appendChild(el);   
}

const patch = (n1, n2) => {
    // 如果标签都不同直接移除n1
    if(n1.tag !== n2.tag) {
        const n1ElParent = n1.el.parentElement;
        n1ElParent.removeChild(n1.el);
        mount(n2,n1ElParent);
    } else {
        // 如果父标签相同,内部属性不同
        // 取出element
        const el = n2.el = n1.el;
        const oldProps = n1.props || {};
        const newProps = n2.props || {};
        for(const key in newProps) {
            const oldValue = oldProps[key];
            const newValue = newProps[key];
            if(oldValue !== newValue) {
                if(key.startsWith == 'on') {
                    el.addEventListener(key.slice(2).toLocaleLowerCase(),newValue);
                } else {
                    el.setAttribute(key,newValue);
                }
            }
        }
        // 删除旧节点的props
        for(const key in oldProps) {
            if(!(key in newProps)) {
                if(key.startsWith == "on") {
                    const oldValue = oldProps[key];
                    el.removeEventListener(key.slice(2).toLocaleLowerCase(),oldValue);
                } else {
                    el.removeAttribute(key);
                }
            }
        }
        // children
        const oldChildren = n1.children || [];
        const newChildren = n2.children || [];
        if(typeof oldChildren === "string") {
            if(typeof newChildren === "string") {
                if(newChildren !== oldChildren) {
                    el.textContent = newChildren;
                } 
            } else {
                el.innerHTML = newChildren;
            }
        } else {
            if(typeof oldChildren === "string") {
                el.innerHTML = "";
                newChildren.forEach(item => {
                    mount(item,el);
                })
            } else {
                // oldChildren:[vdom1,vdom2,vdom3]
                // newChildren:[vdom1,vdom5,vdom6,vdom8,vdom9]
                const commonLength = Math.min(oldChildren.length,newChildren.length);
                for(const i=0;i<commonLength;i++) {
                    patch(oldChildren[i],newChildren[i]);
                }
                // 将要更新的子元素添加到对应的父节点中
                if(oldChildren.length < newChildren.length) {
                    newChildren.slice(commonLength).forEach(item => {
                        mount(item,el);
                    })
                }
                if(oldChildren.length > newChildren.length) {
                    oldChildren.slice(commonLength).forEach(item => {
                        el.removeChild(item.el);
                    })
                } 
            }
        }
    }
}