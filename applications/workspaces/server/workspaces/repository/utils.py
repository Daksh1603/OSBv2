import workspaces.repository.model_repository as repos


def get_class_attr(Cls) -> []:
    import re

    return [
        a
        for a, v in Cls.__dict__.items()
        if not re.match("<function.*?>", str(v))
        and not re.match("<classmethod.*?>", str(v))
        and not (a.startswith("__") and a.endswith("__"))
    ]


def get_class_attr_val(cls):
    attr = get_class_attr(type(cls))
    attr_dict = {}
    for a in attr:
        attr_dict[a] = getattr(cls, a)
    return attr_dict


def insert_or_get_tags(tags):
    tags_list = []
    for tag in tags:
        z = tag.tag
        items = repos.TagRepository().search(q=f"tag__={z}").items
        if len(items) > 0:
            # if found reference to the tag
            tag = items[0]
        tags_list.append(tag)
    return tags_list