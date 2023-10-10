import Reconciler from "react-reconciler";

const HostConfig = {
  supportsMutation: true,
  createInstance(type, props, rootContainer, hostContext, internalHandle) {
    //Implement it
    const element = document.createElement(type);
    ["style", "className", "alt", "href", "target", "src"].forEach((key) => {
      if (props[key]) {
        element[key] = props[key];
      }
    });

    if (props.onClick) {
      element.addEventListener("click", props.onClick);
      console.log("clicked");
    }

    return element;
  },
  createTextInstance(text, rootContainer, hostContext, internalHandle) {
    //Implement it
    return document.createTextNode(text);
  },

  appendInitialChild(parentInstance, child) {
    //Implement it
    parentInstance.appendChild(child);
  },
  appendChildToContainer(container, child) {
    //Implement it
    container.appendChild(child);
  },

  removeChildFromContainer(container, child) {
    //Implement it
    container.removeChild(child);
  },

  commitTextUpdate(textInstance, prevText, nextText) {
    //Implement it
    textInstance.nodeValue = nextText;
  },

  getRootHostContext(rootContainer) {},
  getChildHostContext(parentHostContext, type, rootContainer) {},
  shouldSetTextContent(type, props) {},
  prepareForCommit(containerInfo) {},
  clearContainer(container) {},
  resetAfterCommit(containerInfo) {},
  finalizeInitialChildren(instance, type, props, rootContainer, hostContext) {},
  prepareUpdate(
    instance,
    type,
    oldProps,
    newProps,
    rootContainerInstance,
    currentHostContext
  ) {},
};

const reconcilerInstance = Reconciler(HostConfig);

const CustomRenderer = {
  render(element, renderDom, callback) {
    const container = reconcilerInstance.createContainer(renderDom, false);

    reconcilerInstance.updateContainer(element, container, null, null);
  },
};

export default CustomRenderer;
